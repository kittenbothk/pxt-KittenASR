#include "pxt.h"

namespace test {

void convert(double num){
union{
	double myDouble;
	unsigned char myChars[sizeof(double)];
	} test;

	test.myDouble = num;
	for( int k = 0; k < sizeof(double); k++ ){
	    //std::cout << (int)test.myChars[k] << ' ';
        continue;
	}
}
}