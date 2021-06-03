function __basicloop( a, b, fn, c = 0 )
{
  var i;
  for (
    i = a;
      i < b;
        i++ )
    fn( i, c );
}

function __rnsg__convert( m )
{
  switch ( m )
  {
    case 0: return __rnsg__binary(); break;
    case 1: return __rnsg__integer(); break;
  }
  return 0;
}

function __rnsg__binary()
{
  return Math.round( Math.random() );
}

function __rnsg__integer()
{
  var r0 = document.getElementById( "rnsg__integer__r0" ).value;
  var r1 = document.getElementById( "rnsg__integer__r1" ).value;
  var __r0 = r0;
  var __r1 = r1;
  var r = Math.random();
  var d = __r1 - __r0;
  var m = r * d;
  var k = __r0 + m;
  return Math.round( k );
}

function __rnsg__click__button()
{
  var seq = new Array();
  var a = 0;
  var b = document.getElementById( "rnsg__amount" ).value;
  var m = document.getElementById( "rnsg__mode" ).value;
  __basicloop( a, b, loc__create );
  function loc__create( i )
  {
    var x = __rnsg__convert( Number( m ) );
    seq.push( x );
  }

  var rnsg__string = seq.join( ", " );
  var elem = document.getElementById( "rnsg__content" );
  elem.innerHTML = rnsg__string;
}

function __rnsg__click__amount( e )
{
  e.target.value = '';
}

function __rnsg__click__fn( m )
{
  return function () {
    document.getElementById( "rnsg__mode" ).value = m;
    document.getElementById( "rnsg__button" ).click();
  }
}
