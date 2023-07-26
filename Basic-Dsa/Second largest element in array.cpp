 //{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;

// } Driver Code Ends
//User function template for C++
class Solution{
public:	
	// Function returns the second
	// largest elements
	int print2largest(int arr[], int n) {
	    // code here
	    int largest = 0;
	    int second_largest = 0;
	    int count = 0;
	    for(int i = 0; i < n; i++)
	     {
	      // Finding largest number     
	      if(largest < arr[i])
	      {
	          largest = arr[i];
	      }
	    }
	    
	   for(int i = 0 ; i < n; i++)
	    {     
	       // Finding second largest number
	       if(second_largest < arr[i] && arr[i] != largest)
	        {
	           second_largest = arr[i];
	        }
	       // Counting if value of adjacent index is same
	       else
	        {
	           count++;
	        }
	   } 
	   
	   if(count == n) return -1;
	   return second_largest;
	    
	}
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        int arr[n];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        Solution ob;
        auto ans = ob.print2largest(arr, n);
        cout << ans << "\n";
    }
    return 0;
}

// } Driver Code Ends
