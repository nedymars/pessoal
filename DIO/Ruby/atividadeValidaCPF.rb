require "cpf_cnpj"

print "Digite seu CPF: "
cpf = gets()

if (CPF.valid?(cpf))
    puts("CPF Válido!")
else
    puts("CPF Inválido!")
end