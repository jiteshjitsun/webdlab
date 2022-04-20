%{
    #include<stdio.h>
    int ch=0,ln=0,sp=0,tb=0;
%}
%%
[\n] {ln++;}
[\t] {tb++;}
[" "] {sp++;}
. {ch++;}
%%

int yywrap(){return 1;}

int main() {
    yylex();
    printf("line %d \n tab %d \n space %d \n char %d",ln,tb,sp,ch);

    return 0;
}