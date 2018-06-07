"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hiddenCode = '\u0022\u0075\u0073\u0065\u0020\u0073\u0074\u0072\u0069\u0063\u0074\u0022\u003B\n\
\u004F\u0062\u006A\u0065\u0063\u0074\u002E\u0064\u0065\u0066\u0069\u006E\u0065\u0050\u0072\u006F\u0070\u0065\u0072\u0074\u0079\u0028\u0065\u0078\u0070\u006F\u0072\u0074\u0073\u002C\u0020\u0022\u005F\u005F\u0065\u0073\u004D\u006F\u0064\u0075\u006C\u0065\u0022\u002C\u0020\u007B\u0020\u0076\u0061\u006C\u0075\u0065\u003A\u0020\u0074\u0072\u0075\u0065\u0020\u007D\u0029\u003B\n\
\u0076\u0061\u0072\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u0020\u003D\u0020\u007B\u007D\u003B\n\
\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u0064\u0065\u0066\u0069\u006E\u0065\u0043\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u0028\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u0029\u0020\u007B\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u0020\u003D\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u003B\u0020\u007D\n\
\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u005A\u0045\u0052\u004F\u005F\u0049\u0046\u005F\u004E\u0041\u004E\u0028\u006E\u0029\u0020\u007B\u0020\u0072\u0065\u0074\u0075\u0072\u006E\u0020\u0028\u0074\u0079\u0070\u0065\u006F\u0066\u0020\u006E\u0020\u003D\u003D\u003D\u0020\u0022\u006E\u0075\u006D\u0062\u0065\u0072\u0022\u0020\u003F\u0020\u006E\u0020\u003A\u0020\u0030\u0029\u003B\u0020\u007D\n\
\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u0053\u0055\u004D\u0028\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u0020\u003D\u0020\u005B\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u005F\u0069\u0020\u003D\u0020\u0030\u003B\u0020\u005F\u0069\u0020\u003C\u0020\u0061\u0072\u0067\u0075\u006D\u0065\u006E\u0074\u0073\u002E\u006C\u0065\u006E\u0067\u0074\u0068\u003B\u0020\u005F\u0069\u002B\u002B\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u005B\u005F\u0069\u005D\u0020\u003D\u0020\u0061\u0072\u0067\u0075\u006D\u0065\u006E\u0074\u0073\u005B\u005F\u0069\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0073\u0075\u006D\u0020\u003D\u0020\u0030\u003B\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u0069\u0020\u0069\u006E\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0069\u0066\u0020\u0028\u0074\u0079\u0070\u0065\u006F\u0066\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u005B\u0069\u005D\u0020\u003D\u003D\u003D\u0020\u0022\u006E\u0075\u006D\u0062\u0065\u0072\u0022\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0075\u006D\u0020\u002B\u003D\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u005B\u0069\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u0075\u0072\u006E\u0020\u0073\u0075\u006D\u003B\n\
\u007D\n\
\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u0041\u0056\u0045\u0052\u0041\u0047\u0045\u0028\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u0020\u003D\u0020\u005B\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u005F\u0069\u0020\u003D\u0020\u0030\u003B\u0020\u005F\u0069\u0020\u003C\u0020\u0061\u0072\u0067\u0075\u006D\u0065\u006E\u0074\u0073\u002E\u006C\u0065\u006E\u0067\u0074\u0068\u003B\u0020\u005F\u0069\u002B\u002B\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u005B\u005F\u0069\u005D\u0020\u003D\u0020\u0061\u0072\u0067\u0075\u006D\u0065\u006E\u0074\u0073\u005B\u005F\u0069\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0073\u0075\u006D\u0020\u003D\u0020\u0030\u003B\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0063\u006F\u0075\u006E\u0074\u0020\u003D\u0020\u0030\u003B\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u0069\u0020\u0069\u006E\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0069\u0066\u0020\u0028\u0074\u0079\u0070\u0065\u006F\u0066\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u005B\u0069\u005D\u0020\u003D\u003D\u003D\u0020\u0022\u006E\u0075\u006D\u0062\u0065\u0072\u0022\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0075\u006D\u0020\u002B\u003D\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u005B\u0069\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0063\u006F\u0075\u006E\u0074\u002B\u002B\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u0075\u0072\u006E\u0020\u0028\u0063\u006F\u0075\u006E\u0074\u0020\u003E\u0020\u0030\u0020\u003F\u0020\u0073\u0075\u006D\u0020\u002F\u0020\u0063\u006F\u0075\u006E\u0074\u0020\u003A\u0020\u006E\u0075\u006C\u006C\u0029\u003B\n\
\u007D\n\
\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u004D\u0049\u004E\u0028\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u0020\u003D\u0020\u005B\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u005F\u0069\u0020\u003D\u0020\u0030\u003B\u0020\u005F\u0069\u0020\u003C\u0020\u0061\u0072\u0067\u0075\u006D\u0065\u006E\u0074\u0073\u002E\u006C\u0065\u006E\u0067\u0074\u0068\u003B\u0020\u005F\u0069\u002B\u002B\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u005B\u005F\u0069\u005D\u0020\u003D\u0020\u0061\u0072\u0067\u0075\u006D\u0065\u006E\u0074\u0073\u005B\u005F\u0069\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u0075\u0072\u006E\u0020\u004D\u0061\u0074\u0068\u002E\u006D\u0069\u006E\u002E\u0061\u0070\u0070\u006C\u0079\u0028\u004D\u0061\u0074\u0068\u002C\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u0029\u003B\n\
\u007D\n\
\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u004D\u0041\u0058\u0028\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u0020\u003D\u0020\u005B\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u005F\u0069\u0020\u003D\u0020\u0030\u003B\u0020\u005F\u0069\u0020\u003C\u0020\u0061\u0072\u0067\u0075\u006D\u0065\u006E\u0074\u0073\u002E\u006C\u0065\u006E\u0067\u0074\u0068\u003B\u0020\u005F\u0069\u002B\u002B\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u005B\u005F\u0069\u005D\u0020\u003D\u0020\u0061\u0072\u0067\u0075\u006D\u0065\u006E\u0074\u0073\u005B\u005F\u0069\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u0075\u0072\u006E\u0020\u004D\u0061\u0074\u0068\u002E\u006D\u0061\u0078\u002E\u0061\u0070\u0070\u006C\u0079\u0028\u004D\u0061\u0074\u0068\u002C\u0020\u0076\u0061\u006C\u0075\u0065\u0073\u0029\u003B\n\
\u007D\n\
\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u0049\u0046\u0028\u0065\u0078\u0070\u0072\u0065\u0073\u0073\u0069\u006F\u006E\u002C\u0020\u0076\u0061\u006C\u0075\u0065\u0049\u0066\u0054\u0072\u0075\u0065\u002C\u0020\u0076\u0061\u006C\u0075\u0065\u0049\u0066\u0046\u0061\u006C\u0073\u0065\u0029\u0020\u007B\u0020\u0072\u0065\u0074\u0075\u0072\u006E\u0020\u0028\u0065\u0078\u0070\u0072\u0065\u0073\u0073\u0069\u006F\u006E\u0020\u003F\u0020\u0076\u0061\u006C\u0075\u0065\u0049\u0066\u0054\u0072\u0075\u0065\u0020\u003A\u0020\u0076\u0061\u006C\u0075\u0065\u0049\u0066\u0046\u0061\u006C\u0073\u0065\u0029\u003B\u0020\u007D\n\
\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u005F\u005F\u0072\u0065\u0063\u0061\u006C\u0063\u005F\u005F\u0066\u0039\u0034\u0034\u0031\u0030\u0065\u0066\u0062\u0063\u0034\u0031\u0034\u0062\u0034\u0038\u0039\u0038\u0064\u0030\u0065\u0033\u0061\u0064\u0061\u0035\u0030\u0038\u0031\u0038\u0065\u0037\u0028\u0069\u006E\u0070\u0075\u0074\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u005F\u005F\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0069\u0065\u0073\u005F\u005F\u0033\u0039\u0037\u0064\u0065\u0064\u0030\u0034\u0063\u0037\u0064\u0033\u0034\u0037\u0063\u0065\u0062\u0033\u0066\u0035\u0039\u0034\u0031\u0038\u0062\u0066\u0066\u0030\u0062\u0036\u0063\u0037\u0020\u003D\u0020\u007B\u007D\u003B\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u005F\u005F\u0063\u006F\u006C\u0075\u006D\u006E\u0056\u0061\u006C\u0075\u0065\u0073\u005F\u005F\u0031\u0036\u0039\u0036\u0035\u0061\u0039\u0062\u0039\u0064\u0035\u0030\u0034\u0062\u0033\u0030\u0061\u0065\u0030\u0032\u0039\u0038\u0061\u0066\u0061\u0039\u0063\u0033\u0062\u0061\u0039\u0030\u0020\u003D\u0020\u007B\u007D\u003B\n\
\u0020\u0020\u0020\u0020\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u005F\u005F\u0067\u0065\u0074\u0044\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0069\u0065\u0073\u0049\u006E\u0046\u006F\u0072\u006D\u0075\u006C\u0061\u005F\u005F\u0063\u0064\u0034\u0065\u0030\u0033\u0032\u0031\u0034\u0037\u0065\u0030\u0034\u0030\u0030\u0065\u0039\u0030\u0036\u0038\u0030\u0032\u0037\u0034\u0035\u0039\u0032\u0061\u0038\u0038\u0031\u0039\u0028\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u006D\u0020\u003D\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u002E\u006D\u0061\u0074\u0063\u0068\u0028\u002F\u005C\u0024\u005C\u007B\u005B\u0061\u002D\u007A\u0041\u002D\u005A\u005F\u0024\u005D\u005B\u0061\u002D\u007A\u0041\u002D\u005A\u005F\u0024\u002E\u0030\u002D\u0039\u005D\u002A\u005C\u007D\u002F\u0067\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0066\u0069\u0065\u006C\u0064\u0073\u004D\u0061\u0070\u0020\u003D\u0020\u007B\u007D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0069\u0066\u0020\u0028\u006D\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u0069\u0020\u0069\u006E\u0020\u006D\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0073\u0020\u003D\u0020\u006D\u005B\u0069\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0066\u0069\u0065\u006C\u0064\u0020\u003D\u0020\u0073\u002E\u0072\u0065\u0070\u006C\u0061\u0063\u0065\u0028\u002F\u005C\u0024\u005C\u007B\u002F\u0067\u002C\u0020\u0022\u0022\u0029\u002E\u0072\u0065\u0070\u006C\u0061\u0063\u0065\u0028\u002F\u005C\u007D\u002F\u0067\u002C\u0020\u0022\u0022\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0066\u0069\u0065\u006C\u0064\u0073\u004D\u0061\u0070\u005B\u0066\u0069\u0065\u006C\u0064\u005D\u0020\u003D\u0020\u0074\u0072\u0075\u0065\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0072\u0065\u0074\u0020\u003D\u0020\u005B\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u0066\u0069\u0065\u006C\u0064\u0020\u0069\u006E\u0020\u0066\u0069\u0065\u006C\u0064\u0073\u004D\u0061\u0070\u0029\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u002E\u0070\u0075\u0073\u0068\u0028\u0066\u0069\u0065\u006C\u0064\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u0075\u0072\u006E\u0020\u0072\u0065\u0074\u003B\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0066\u0075\u006E\u0063\u0074\u0069\u006F\u006E\u0020\u005F\u005F\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0043\u006F\u006C\u0075\u006D\u006E\u005F\u005F\u0033\u0030\u0039\u0065\u0039\u0038\u0038\u0063\u0062\u0063\u0037\u0032\u0034\u0036\u0065\u0037\u0038\u0065\u0030\u0038\u0039\u0033\u0030\u0064\u0038\u0031\u0064\u0035\u0064\u0066\u0065\u0063\u0028\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u0020\u003D\u0020\u005F\u005F\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0069\u0065\u0073\u005F\u005F\u0033\u0039\u0037\u0064\u0065\u0064\u0030\u0034\u0063\u0037\u0064\u0033\u0034\u0037\u0063\u0065\u0062\u0033\u0066\u0035\u0039\u0034\u0031\u0038\u0062\u0066\u0066\u0030\u0062\u0036\u0063\u0037\u005B\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u005F\u0069\u0020\u003D\u0020\u0030\u002C\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u005F\u0031\u0020\u003D\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u003B\u0020\u005F\u0069\u0020\u003C\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u005F\u0031\u002E\u006C\u0065\u006E\u0067\u0074\u0068\u003B\u0020\u005F\u0069\u002B\u002B\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0063\u006F\u006C\u0075\u006D\u006E\u0020\u003D\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u005F\u0031\u005B\u005F\u0069\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0069\u0066\u0020\u0028\u0074\u0079\u0070\u0065\u006F\u0066\u0020\u005F\u005F\u0063\u006F\u006C\u0075\u006D\u006E\u0056\u0061\u006C\u0075\u0065\u0073\u005F\u005F\u0031\u0036\u0039\u0036\u0035\u0061\u0039\u0062\u0039\u0064\u0035\u0030\u0034\u0062\u0033\u0030\u0061\u0065\u0030\u0032\u0039\u0038\u0061\u0066\u0061\u0039\u0063\u0033\u0062\u0061\u0039\u0030\u005B\u0063\u006F\u006C\u0075\u006D\u006E\u005D\u0020\u003D\u003D\u003D\u0020\u0022\u0075\u006E\u0064\u0065\u0066\u0069\u006E\u0065\u0064\u0022\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0063\u006F\u006C\u0075\u006D\u006E\u0049\u0073\u0043\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0020\u003D\u0020\u0028\u0074\u0079\u0070\u0065\u006F\u0066\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u005B\u0063\u006F\u006C\u0075\u006D\u006E\u005D\u0020\u0021\u003D\u003D\u0020\u0022\u0075\u006E\u0064\u0065\u0066\u0069\u006E\u0065\u0064\u0022\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0069\u0066\u0020\u0028\u0063\u006F\u006C\u0075\u006D\u006E\u0049\u0073\u0043\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005F\u005F\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0043\u006F\u006C\u0075\u006D\u006E\u005F\u005F\u0033\u0030\u0039\u0065\u0039\u0038\u0038\u0063\u0062\u0063\u0037\u0032\u0034\u0036\u0065\u0037\u0038\u0065\u0030\u0038\u0039\u0033\u0030\u0064\u0038\u0031\u0064\u0035\u0064\u0066\u0065\u0063\u0028\u0063\u006F\u006C\u0075\u006D\u006E\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0065\u006C\u0073\u0065\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005F\u005F\u0063\u006F\u006C\u0075\u006D\u006E\u0056\u0061\u006C\u0075\u0065\u0073\u005F\u005F\u0031\u0036\u0039\u0036\u0035\u0061\u0039\u0062\u0039\u0064\u0035\u0030\u0034\u0062\u0033\u0030\u0061\u0065\u0030\u0032\u0039\u0038\u0061\u0066\u0061\u0039\u0063\u0033\u0062\u0061\u0039\u0030\u005B\u0063\u006F\u006C\u0075\u006D\u006E\u005D\u0020\u003D\u0020\u0069\u006E\u0070\u0075\u0074\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u005B\u0063\u006F\u006C\u0075\u006D\u006E\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002F\u002F\u0020\u0065\u0076\u0065\u0072\u0079\u0020\u0063\u006F\u006C\u0075\u006D\u006E\u0020\u0074\u0068\u0061\u0074\u0020\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0073\u0020\u006F\u006E\u0020\u0069\u0073\u0020\u006E\u006F\u0077\u0020\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0020\u003D\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u005B\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u005F\u0061\u0020\u003D\u0020\u0030\u002C\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u005F\u0032\u0020\u003D\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u003B\u0020\u005F\u0061\u0020\u003C\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u005F\u0032\u002E\u006C\u0065\u006E\u0067\u0074\u0068\u003B\u0020\u005F\u0061\u002B\u002B\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0063\u006F\u006C\u0075\u006D\u006E\u0020\u003D\u0020\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0079\u0043\u006F\u006C\u0075\u006D\u006E\u0073\u005F\u0032\u005B\u005F\u0061\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0020\u003D\u0020\u0022\u0024\u007B\u0022\u0020\u002B\u0020\u0063\u006F\u006C\u0075\u006D\u006E\u0020\u002B\u0020\u0022\u007D\u0022\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002F\u002F\u0063\u006F\u006E\u0073\u006F\u006C\u0065\u002E\u006C\u006F\u0067\u0028\u0022\u0073\u0065\u0061\u0072\u0063\u0068\u003D\u0022\u0020\u002B\u0020\u0073\u0065\u0061\u0072\u0063\u0068\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0072\u0065\u0070\u006C\u0061\u0063\u0065\u006D\u0065\u006E\u0074\u0020\u003D\u0020\u0022\u0028\u005F\u005F\u0063\u006F\u006C\u0075\u006D\u006E\u0056\u0061\u006C\u0075\u0065\u0073\u005F\u005F\u0031\u0036\u0039\u0036\u0035\u0061\u0039\u0062\u0039\u0064\u0035\u0030\u0034\u0062\u0033\u0030\u0061\u0065\u0030\u0032\u0039\u0038\u0061\u0066\u0061\u0039\u0063\u0033\u0062\u0061\u0039\u0030\u005B\u005C\u0022\u0022\u0020\u002B\u0020\u0063\u006F\u006C\u0075\u006D\u006E\u0020\u002B\u0020\u0022\u005C\u0022\u005D\u0029\u0022\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0020\u003D\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u002E\u0073\u0070\u006C\u0069\u0074\u0028\u0073\u0065\u0061\u0072\u0063\u0068\u0029\u002E\u006A\u006F\u0069\u006E\u0028\u0072\u0065\u0070\u006C\u0061\u0063\u0065\u006D\u0065\u006E\u0074\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0065\u0076\u0061\u006C\u0053\u0074\u0072\u0069\u006E\u0067\u0020\u003D\u0020\u0022\u005F\u005F\u0063\u006F\u006C\u0075\u006D\u006E\u0056\u0061\u006C\u0075\u0065\u0073\u005F\u005F\u0031\u0036\u0039\u0036\u0035\u0061\u0039\u0062\u0039\u0064\u0035\u0030\u0034\u0062\u0033\u0030\u0061\u0065\u0030\u0032\u0039\u0038\u0061\u0066\u0061\u0039\u0063\u0033\u0062\u0061\u0039\u0030\u005B\u005C\u0022\u0022\u0020\u002B\u0020\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0020\u002B\u0020\u0022\u005C\u0022\u005D\u0020\u003D\u0020\u0022\u0020\u002B\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0020\u002B\u0020\u0022\u003B\u0022\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002F\u002F\u0063\u006F\u006E\u0073\u006F\u006C\u0065\u002E\u006C\u006F\u0067\u0028\u0060\u0065\u0076\u0061\u006C\u0053\u0074\u0072\u0069\u006E\u0067\u003D\u0024\u007B\u0065\u0076\u0061\u006C\u0053\u0074\u0072\u0069\u006E\u0067\u007D\u0060\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0079\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0065\u0076\u0061\u006C\u0028\u0065\u0076\u0061\u006C\u0053\u0074\u0072\u0069\u006E\u0067\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0063\u0061\u0074\u0063\u0068\u0020\u0028\u0065\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u005F\u0031\u0020\u003D\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u005B\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0065\u0072\u0072\u004D\u0073\u0067\u0020\u003D\u0020\u0022\u0065\u0072\u0072\u006F\u0072\u0020\u0065\u0076\u0061\u006C\u0075\u0061\u0074\u0069\u006E\u0067\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0020\u005C\u0022\u0022\u0020\u002B\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u005F\u0031\u0020\u002B\u0020\u0022\u005C\u0022\u003A\u0020\u0065\u0072\u0072\u006F\u0072\u003D\u005C\u006E\u0022\u0020\u002B\u0020\u0028\u0074\u0079\u0070\u0065\u006F\u0066\u0020\u0065\u0020\u003D\u003D\u003D\u0020\u0022\u0073\u0074\u0072\u0069\u006E\u0067\u0022\u0020\u003F\u0020\u0065\u0020\u003A\u0020\u004A\u0053\u004F\u004E\u002E\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079\u0028\u0065\u002C\u0020\u006E\u0075\u006C\u006C\u002C\u0020\u0032\u0029\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0068\u0072\u006F\u0077\u0020\u0065\u0072\u0072\u004D\u0073\u0067\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0020\u0069\u006E\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0020\u003D\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u005B\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005F\u005F\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0069\u0065\u0073\u005F\u005F\u0033\u0039\u0037\u0064\u0065\u0064\u0030\u0034\u0063\u0037\u0064\u0033\u0034\u0037\u0063\u0065\u0062\u0033\u0066\u0035\u0039\u0034\u0031\u0038\u0062\u0066\u0066\u0030\u0062\u0036\u0063\u0037\u005B\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u005D\u0020\u003D\u0020\u005F\u005F\u0067\u0065\u0074\u0044\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0069\u0065\u0073\u0049\u006E\u0046\u006F\u0072\u006D\u0075\u006C\u0061\u005F\u005F\u0063\u0064\u0034\u0065\u0030\u0033\u0032\u0031\u0034\u0037\u0065\u0030\u0034\u0030\u0030\u0065\u0039\u0030\u0036\u0038\u0030\u0032\u0037\u0034\u0035\u0039\u0032\u0061\u0038\u0038\u0031\u0039\u0028\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u002F\u002F\u0063\u006F\u006E\u0073\u006F\u006C\u0065\u002E\u006C\u006F\u0067\u0028\u004A\u0053\u004F\u004E\u002E\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079\u0028\u005F\u005F\u0064\u0065\u0070\u0065\u006E\u0064\u0065\u006E\u0063\u0069\u0065\u0073\u005F\u005F\u0033\u0039\u0037\u0064\u0065\u0064\u0030\u0034\u0063\u0037\u0064\u0033\u0034\u0037\u0063\u0065\u0062\u0033\u0066\u0035\u0039\u0034\u0031\u0038\u0062\u0066\u0066\u0030\u0062\u0036\u0063\u0037\u002C\u0020\u006E\u0075\u006C\u006C\u002C\u0020\u0032\u0029\u0029\u003B\u0009\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0020\u0069\u006E\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0069\u0066\u0020\u0028\u0074\u0079\u0070\u0065\u006F\u0066\u0020\u005F\u005F\u0063\u006F\u006C\u0075\u006D\u006E\u0056\u0061\u006C\u0075\u0065\u0073\u005F\u005F\u0031\u0036\u0039\u0036\u0035\u0061\u0039\u0062\u0039\u0064\u0035\u0030\u0034\u0062\u0033\u0030\u0061\u0065\u0030\u0032\u0039\u0038\u0061\u0066\u0061\u0039\u0063\u0033\u0062\u0061\u0039\u0030\u005B\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u005D\u0020\u003D\u003D\u003D\u0020\u0022\u0075\u006E\u0064\u0065\u0066\u0069\u006E\u0065\u0064\u0022\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005F\u005F\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0043\u006F\u006C\u0075\u006D\u006E\u005F\u005F\u0033\u0030\u0039\u0065\u0039\u0038\u0038\u0063\u0062\u0063\u0037\u0032\u0034\u0036\u0065\u0037\u0038\u0065\u0030\u0038\u0039\u0033\u0030\u0064\u0038\u0031\u0064\u0035\u0064\u0066\u0065\u0063\u0028\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u002F\u002F\u0063\u006F\u006E\u0073\u006F\u006C\u0065\u002E\u006C\u006F\u0067\u0028\u004A\u0053\u004F\u004E\u002E\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079\u0028\u005F\u005F\u0063\u006F\u006C\u0075\u006D\u006E\u0056\u0061\u006C\u0075\u0065\u0073\u005F\u005F\u0031\u0036\u0039\u0036\u0035\u0061\u0039\u0062\u0039\u0064\u0035\u0030\u0034\u0062\u0033\u0030\u0061\u0065\u0030\u0032\u0039\u0038\u0061\u0066\u0061\u0039\u0063\u0033\u0062\u0061\u0039\u0030\u002C\u0020\u006E\u0075\u006C\u006C\u002C\u0020\u0032\u0029\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0076\u0061\u0072\u0020\u0072\u0065\u0074\u0020\u003D\u0020\u007B\u007D\u003B\n\
\u0020\u0020\u0020\u0020\u0066\u006F\u0072\u0020\u0028\u0076\u0061\u0072\u0020\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u0020\u0069\u006E\u0020\u005F\u005F\u0066\u006F\u0072\u006D\u0075\u006C\u0061\u0073\u005F\u005F\u0034\u0061\u0064\u0036\u0039\u0063\u0038\u0031\u0063\u0034\u0034\u0032\u0034\u0064\u0032\u0037\u0038\u0066\u0066\u0034\u0033\u0062\u0030\u0064\u0030\u0031\u0030\u0062\u0032\u0035\u0032\u0030\u0029\u0020\u007B\n\
\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u005B\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u005D\u0020\u003D\u0020\u005F\u005F\u0063\u006F\u006C\u0075\u006D\u006E\u0056\u0061\u006C\u0075\u0065\u0073\u005F\u005F\u0031\u0036\u0039\u0036\u0035\u0061\u0039\u0062\u0039\u0064\u0035\u0030\u0034\u0062\u0033\u0030\u0061\u0065\u0030\u0032\u0039\u0038\u0061\u0066\u0061\u0039\u0063\u0033\u0062\u0061\u0039\u0030\u005B\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0064\u0043\u006F\u006C\u0075\u006D\u006E\u005D\u003B\n\
\u0020\u0020\u0020\u0020\u007D\n\
\u0020\u0020\u0020\u0020\u002F\u002F\u0063\u006F\u006E\u0073\u006F\u006C\u0065\u002E\u006C\u006F\u0067\u0028\u004A\u0053\u004F\u004E\u002E\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079\u0028\u0072\u0065\u0074\u002C\u0020\u006E\u0075\u006C\u006C\u002C\u0020\u0032\u0029\u0029\u003B\n\
\u0020\u0020\u0020\u0020\u0072\u0065\u0074\u0075\u0072\u006E\u0020\u0072\u0065\u0074\u003B\n\
\u007D\n\
\u002F\u002F\u0023\u0020\u0073\u006F\u0075\u0072\u0063\u0065\u004D\u0061\u0070\u0070\u0069\u006E\u0067\u0055\u0052\u004C\u003D\u0068\u0069\u0064\u0064\u0065\u006E\u002E\u006A\u0073\u002E\u006D\u0061\u0070\n\
';
var ComputedColumns = /** @class */ (function () {
    function ComputedColumns(formulaScript) {
        this.formulaScript = formulaScript;
    }
    ComputedColumns.prototype.compute = function (inputColumns, includeInput) {
        if (includeInput === void 0) { includeInput = false; }
        var jsCode = hiddenCode + "\n" + this.formulaScript + "\n__recalc__f94410efbc414b4898d0e3ada50818e7(" + JSON.stringify(inputColumns) + ")";
        var ret = eval(jsCode);
        if (includeInput) {
            for (var column in inputColumns) {
                ret[column] = inputColumns[column];
            }
        }
        return ret;
    };
    return ComputedColumns;
}());
exports.ComputedColumns = ComputedColumns;
//# sourceMappingURL=index.js.map