#include "pxt.h"

namespace test {

char convert(double num){
union {
  double d[num];
  char b[sizeof(double) * 2];
};
return b;
}
}