#include "pxt.h"

namespace test {
// %
/*
int convert(double num){
union{
	double myDouble;
	unsigned char myChars[sizeof(double)];
	} test;

	test.myDouble = num;
	for( int k = 0; k < sizeof(double); k++ ){
	    //std::cout << (int)test.myChars[k] << ' ';
        continue;
	}
	return (int)test.myChars;
}
*/
/*
int* convert(double num){
union{
	double myDouble;
	unsigned char myChars[sizeof(double)];
	} test;
	test.myDouble = num;
	int results[sizeof(double)];
	for( int k = 0; k < sizeof(double); k++ ){
	    results[k]=(int)test.myChars[k];
	}
	int *ptr=results;
	return ptr;
}

int getArray(double input){
    int* ans=convert(input);
    return ans;
}
*/
}