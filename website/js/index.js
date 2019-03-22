$(document).ready(function(){
  introScreen();
  setInterval(showFunFact, 10000)
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

function showFunFact() {

  ///Helper Functions
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);      
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);      
    var b2 = y2 + h2;
    var r2 = x2 + w2;
        
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
  }

  function setXY(id_selector, class_selector) {
      var colliding = true
    while (colliding) {
      var right = Math.random() * 95
      var bottom = Math.random() * 95
      $(id_selector).css('right', right.toString() + 'vw')
      $(id_selector).css('bottom', bottom.toString() + 'vh')
      $(class_selector).each(function() {
        colliding = collision($(this), $(id_selector))
        }
      )
    }
   }

  function setHTML(title_selecter, body_selector) {
    var num = Math.floor(Math.random() * 10) + 1
    var varName = 'fact' + num
    $(title_selecter).html(window[varName].name)
    $(body_selector).html(window[varName].fact)
  }
  ///End Helper Funcs
  var $fact = $('#fun-fact')
  $fact.fadeOut(5000, function() {
    setXY('#fun-fact', '.container')
    setHTML('#fact-title', '#fact-body')
    $fact.fadeIn(5000)
  })
}