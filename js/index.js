$(document).ready(function(){
  introScreen();
});


function introScreen() {

  /// Helper functions
  function blink(selector, currBlink, maxBlink, callback) {
    $(selector).fadeOut(500, function() {
      $(this).fadeIn(500, function() {
        if (currBlink != undefined && maxBlink != undefined && currBlink >= maxBlink) {
          if (callback) {
            callback();
          }
        } else {
          blink(selector, currBlink + 1, maxBlink, callback);
        }
      });
    });
  };

  function typeNext(selector, typed, toType, timeout=50, callback) {
    if (toType.length == 0) {
      callback();
      return;
    }
    if (toType[0] == ' ') {
      typed += '&nbsp;';
    } else {
      typed += toType[0];
    }
    toType = toType.substring(1);
    $(selector).html(typed);
    setTimeout(function(){
      typeNext(selector, typed, toType, timeout, callback);
    }, timeout);
  };

  function afterAnimation(delay=50) {
    blink('.intro-text > .caret');
  }

  function typeLines(lines, typingDelay = 100, betweenLines = 1) {
    typeNext('.intro-text > .intro-message', '', lines[0], typingDelay, function() {
      if (lines.length == 1) {
        afterAnimation();
      } else {
        blink('.intro-text > .caret', 0, betweenLines, function(){
          typeLines(lines.slice(1), typingDelay, betweenLines);
        });
      }
    });
  };
  /// End Helper functions
  var introTextLines = ['Hi, I\'m Jacob.', 'Welcome to my crib!'];

  blink('.intro-text > .caret', 0, 1, function(){
    typeLines(introTextLines, 200, 0);
  });
};
