package garage;

public abstract class Vehicle 
{
	private int numOfWheels;
	private int topSpeed;
	private int numOfSeats;
	private String name="Fsil";
	
	public Vehicle()
	{
		
	}
	public Vehicle(int numOfWheels, int topSpeed, int numOfSeats,String name)
	{
		super();
		this.numOfWheels = numOfWheels;
		this.numOfSeats = numOfSeats;
		this.topSpeed = topSpeed;
		this.name = name;
		
	}
	public abstract void drive();
	
	private void refuel()
	{
		System.out.println("top up");
	}
	
	public int getNumOfWheels() {
		return numOfWheels;
	}
	public void setNumOfWheels(int numOfWheels) {
		this.numOfWheels = numOfWheels;
	}
	public int getSpeed() {
		return topSpeed;
	}
	public void setSpeed(int speed) {
		this.topSpeed = speed;
	}
	public int getNumOfSeats() {
		return numOfSeats;
	}
	public void setNumOfSeats(int nnumOfSeats) {
		this.numOfSeats = nnumOfSeats;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	

}
