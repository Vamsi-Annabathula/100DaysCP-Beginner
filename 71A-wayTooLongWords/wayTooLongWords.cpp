#include <iostream>
#include <string>
using namespace std;

int main() {
	int lines;
	cin >> lines;
	string *arr = new string[lines];
	for (int i = 0; i < lines; i++) {
		cin >> arr[i];
	};
	for (int i = 0; i < lines; i++) {
		if (arr[i].length() <= 10) {
			cout << arr[i] << "\n";
		}
		else {
			cout << arr[i].at(0) + to_string(arr[i].length() - 2) + arr[i].at(arr[i].length() - 1) << "\n";
		};
	};
	return 0;
}