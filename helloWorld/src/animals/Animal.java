package animals;

public abstract class Animal 
{
	private int weight;
	private int numOfLimbs;
	public abstract void communicate();
	
	public Animal() 
	{
		super();
	}
	
	private void die()
	{
		System.out.println("RIP");
	}
	
	public int getNumOfLimbs() {
		return numOfLimbs;
	}
	public void setNumOfLimbs(int numOfLimbs) {
		this.numOfLimbs = numOfLimbs;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	
}
