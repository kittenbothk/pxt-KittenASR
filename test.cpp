#include "pxt.h"

namespace test {

char convert(double d){
    char *byteArray = (char*)&d;
    return byteArray;
}
}