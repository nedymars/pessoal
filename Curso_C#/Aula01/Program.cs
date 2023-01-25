// See https://aka.ms/new-console-template for more information
int valor1;
int valor2;
int total;

Console.WriteLine("Digite o primeiro valor:");
valor1 = int.Parse(Console.ReadLine());

Console.WriteLine("Digite o Segundo valor:");
valor2 = int.Parse(Console.ReadLine());

total = valor1 + valor2;

Console.WriteLine("Total: " + total);