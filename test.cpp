namespace test {
// %

string convert(double d){
/*
   union{
	double myDouble;
	unsigned char myChars[sizeof(double)];
	} test;
*/
	test.myDouble = d;
	string current="";
	for( int k = 0; k < sizeof(double); k++ ){
            //std::cout << (int)test.myChars[k] << ' ';
            current = current.append(to_string((int)test.myChars[k]));
            current = current.append(" ");
	}
	return (string)current;
}


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