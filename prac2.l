%{
    #include<stdio.h>
    int count=0;
%}

op [+-*/]
digitt [0-9]
letter [a-zA-Z]
id {letter}*|({letter}{digitt})+
notid ({digitt}{letter})+

%%
[\n\t]+
("for")|("int")|("if")|("while")|("default")|("float")|("bool")|("switch")|("printf")|("scanf")|("case") { printf("%s is a keyword",yytext);}
{id} { printf("%s is an identifeir",yytext); count++; }
{notid} { printf("%s is not an identifeir",yytext); }
%%

int yywrap(){return 1;}

int main(){
    yylex();
    printf("total identifeir %d",count);
    return 0;
}