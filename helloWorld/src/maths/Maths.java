package maths;

public class Maths 
{

	
	public int sum(int x, int y)
	{
		int z = x+y;
		return z;
	}
	public int multiplication(int x, int y)
	{
		int z = x*y;
		return z;
	}
	public double division(double x, double y)
	{
		if(x<y)
		{
			double z = x/y;
			return z;
		}
		else
			System.out.println("Numerater larger than denominator");
		return 0;
		
	}
	public int subtraction(int x, int y)
	{
		int z = x-y;
		return z;
	}

}
