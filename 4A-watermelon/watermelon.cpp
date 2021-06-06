#include <iostream>
using namespace std;

int main() {
	int weightOfWatermelon;
	cin >> weightOfWatermelon;
	puts(weightOfWatermelon > 3 and weightOfWatermelon %2 == 0 ? "YES" : "NO");
	return 0;
}