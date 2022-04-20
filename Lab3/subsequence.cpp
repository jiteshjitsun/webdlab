#include<bits/stdc++.h>
using namespace std;

void f(vector<int> &v,int i,int n,vector<int> &ds){
    if(i==n){

        for(auto it:ds){
            cout<<it<<" ";
        }
        cout<<endl;
        return;
    }
    ds.push_back(v[i]);
    f(v,i+1,n,ds);
    ds.pop_back();
    f(v,i+1,n,ds);
}

int main(){
    vector<int> v = {1,2,3};
    int n =3;
    vector<int> ds;
    f(v,0,n,ds);
}