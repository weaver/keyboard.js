define(['lib/keyboard'], function(Kb) {
  Kb.Keyboard()
    .bind(document)
    .define({
      'alt+shift+m': function(ev) {
        alert('Got ' + Kb.format(Kb.key(ev)));
        return false;
      },
      'control+alt+$': function(ev) {
        alert('Got ' + Kb.format(Kb.key(ev)));
      }
    });

  var input = document.getElementsByTagName('textarea')[0];

  if (document.addEventListener)
    input.addEventListener('keydown', show, false);
  else
    input.attachEvent('onkeydown', show);

  function show(ev) {
    ev.preventDefault && ev.preventDefault();
    ev.stopPropagation && ev.stopPropagation();
    // console.log('down', ev.keyCode, ' ', ev.keyCode.toString(16));
    input.value = Kb.format(Kb.key(ev));
    return false;
  }

});