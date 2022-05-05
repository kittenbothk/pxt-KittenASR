namespace test {

void convert(void){
union {
  double d[2];
  char b[sizeof(double) * 2];
};
}
}