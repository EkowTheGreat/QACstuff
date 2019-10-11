package garage;

public class App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
			
			Car porshe = new Car();
			Motorbike yamaha = new Motorbike();
			Speedboat skrr = new Speedboat();
			Garage gar = new Garage();
			for(int x =0; x<3 ;x++)
			{
				for(int y =0; y<3 ;y++)
				{
					if(x==0)
					{
						//Car xx = new Car(5,4);
						gar.addVehicle(porshe);
					}
					if(x==0)
					{
						gar.addVehicle(skrr);
					}
					if(x==0)
					{
						gar.addVehicle(yamaha);
					}
				}
			}
			
		
			
			
			gar.calculateBill();
			
			gar.removeVehicle(porshe);
			gar.removeVehicle(skrr);
			//gar.removeVehicle(yamaha);
			gar.removeVehicle(porshe);
			gar.removeVehicle(skrr);
			//gar.removeVehicle(yamaha);
			gar.removeVehicle(porshe);
			gar.removeVehicle(skrr);
			//gar.removeVehicle(yamaha);
			//gar.removeByType("Motorbike");//(yamaha);
			gar.calculateBill();
			
			//porshe.drive();
			//yamaha.drive();
			//skrr.drive();
			
			
			
			
			
			//calculateBill();
	}

}
