%{
    #include<stdio.h>

%}

DIGIT [0-9]

%%
{DIGIT}* {ECHO;printf("INTEGER");}
{DIGIT}*\.{DIGIT}* {ECHO;printf("FLOAT");}
%%

int yywrap(){return 1;}

int main(){
    yylex();
    return 0;
}