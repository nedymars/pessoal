// See https://aka.ms/new-console-template for more information

int idade;

Console.WriteLine("Digite a idade:");
idade = int.Parse(Console.ReadLine());

if(idade >= 18) {
    Console.WriteLine("É maior de Idade");
} else {
    Console.WriteLine("É menor de Idade");
}
