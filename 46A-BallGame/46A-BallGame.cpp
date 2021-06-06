#include <iostream>
using namespace std;

int main() {
  int children;
  cin >> children;
  int check = 1;
  int inc = children - 2;
  while (check < children) {
    cout << children - inc << " ";
    check++;
    inc = inc - check < 0 ? children - check + inc : inc - check;
};
}