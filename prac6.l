%{
    #include<stdio.h>

%}

start \/\*;
end \*\/;
 %%
 \/\/ (.*) {};
 {start}.*{end} {};
 %%

 int yywrap() {return 1;}

 int main(){
     yylex();
     return 0;
 }