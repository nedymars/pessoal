numeros = []

puts "Digite o primeiro número: "
numero1 = gets().to_i

puts "Digite o segundo número: "
numero2 = gets().to_i

puts "Digite o terceiro número: "
numero3 = gets().to_i

numeros.push(numero1, numero2, numero3)

numeros.each do |n|
    puts n ** 3
end