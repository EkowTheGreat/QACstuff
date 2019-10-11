package garage;

import java.util.ArrayList;
import java.util.List;



public class Garage 
{
	static List<Vehicle> vehicles = new ArrayList<>();
	public  Garage()
	{
		
		
		

	}
	public void calculateBill()
	{
		int cost = 0;
		int carPrice = 400;
		int boatPrice= 900;
		int bikePrice = 150;
		for(Vehicle v: vehicles)
		{
			if(v.getNumOfWheels() == 0)
			{
				cost += boatPrice;
			}
			if(v.getNumOfWheels() == 2)
			{
				cost += bikePrice;
			}
			if(v.getNumOfWheels() == 4)
			{
				cost += carPrice;
			}
		}
		System.out.println("Total Cost = £"+cost);
	}
	 public void removeVehicle(Vehicle j)
	{
		 vehicles.remove(j);
//		
	}
	 public void removeByType(String j)
	 {
		 List<Vehicle> vehicles2 = new ArrayList<>();
		 for(Vehicle v: vehicles)
				{
			
			 
					if(v.getName() != j )
					{
						vehicles2.add(v);
						//vehicles.remove(v);
						//System.out.println(j);
						
					}
				
				}
		 //calculateBill();
		 vehicles = vehicles2;
	 }
	 public void addVehicle(Vehicle v)
	{
		vehicles.add(v);
		v.drive();
	}
	public void clearGarage()
	{
		vehicles.clear();
	}

}
