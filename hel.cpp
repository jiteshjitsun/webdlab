#include<bits/stdc++.h>
using namespace std;

int main(){
    int n = 4;
    vector<vector<int>> bookings = {{2,3,15},{1,3,50},{3,4,40},{1,3,35}};
    vector<vector<int>> v(3,vector<int>(n+2,0));
        int len = bookings.size();
        int i=0;
        while(i<bookings.size()){
            
            for(int k=bookings[i][0]; k<=bookings[i][1]; k++){
                v[i][k] = bookings[i][2];
            }
            i++;
        }
        
        // for(int i=0; i<bookings.size(); i++){
        //     for(int j=0; j<=n; j++){
        //         cout<<v[i][j]<<" ";
        //     }
        //     cout<<endl;
        // }
        
        vector<int> res;
        for(int i=0; i<=n; i++){
            int sum =0;
            for(int j=0; j<bookings.size(); j++){
                sum+=v[j][i];
            }
            // if(sum!=0)
            res.push_back(sum);
        }

        res.erase(res.begin());
        // vector<int> ans;
        // for(int i=1; i<n; i++){
        //     ans.push_back(res[i]);
        // }
        // return ans;
        for(int i=0; i<res.size(); i++){
            cout<<res[i]<<" ";
        }
 
}