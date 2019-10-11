package animals;

import java.util.ArrayList;
import java.util.List;

public class App {

	public static void main(String[] args) 
	{
		Mammal xv1 = new Human();
		Mammal xv2 = new Dolphin();
		xv1.communicate();
		System.out.println(xv1.toString());
		List<Animal> animals = new ArrayList<>();
		animals.add(xv1);
		animals.add(xv2);
	}

}
