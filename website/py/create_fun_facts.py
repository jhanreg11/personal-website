import json

fact = {'name': None, 'fact': None}

with open('../txt/fun_facts.txt', 'r') as data_file:
	file_input = data_file.read()

lines = file_input.split('\n')
tokens = []
for i in lines:
	tokens += i.split('-')

var_temp = 'var %s = %s'
for i in range(len(tokens)):
	if i % 2 != 0:
		fact['fact'] = tokens[i]
		var_name = 'fact' + str(int((i+1)/2))
		var_value = json.dumps(fact)
		if i == 1:
			with open('../js/facts.json', 'w') as write_file:
				write_file.write(var_temp % (var_name, var_value))
				write_file.write('\n')
		else:
			with open('../js/facts.json', 'a') as write_file:
				write_file.write(var_temp % (var_name, var_value))
				write_file.write('\n')
	else:
		fact['name'] = 'Fun Fact #' + str(int((i+2)/2))

