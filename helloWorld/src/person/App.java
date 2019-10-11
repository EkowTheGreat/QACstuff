package person;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Savepoint;
import java.util.ArrayList;
import java.util.List;

public class App {
	static Person[] contactList = new Person[10];
	static List <Person> people = new ArrayList<>();

	public static void main(String[] args) {

		for (int i = 0; i < 10; i++)
		{
			String line = "Person" + i;
			contactList[i] = new Person();
			contactList[i].setDetails(line, 20, "Student");
			people.add(contactList[i]);
			
			

		}
		
		findPerson("Person5");
		writeToFile();
		readFromFile();
		;
	}

	public static void findPerson(String name) {
		
		for (Person p: people)
		{
			if(name.equals(p.getName()) )
			{
			p.getDetails();
			}
		}
	}
	static void  writeToFile() 
	{
		File file = new File("memberList.txt");
	    FileWriter writer = null;
	    try {
	        writer = new FileWriter(file);
	        
	        for (Person p: people)
			{
	        	writer.write(p.getPrintDetails()+"\r\n");
			}
	        writer.write("Ekow 22 Great");
	    	} 
	    catch (IOException e) 
	    	{
	    	e.printStackTrace(); 
	    	} 
	    finally 
	    	{
	        if (writer != null) try { writer.close(); } catch (IOException ignore) {}
	    	}
	    System.out.printf("File is located at %s%n", file.getAbsolutePath());
	}
	static void readFromFile()
	{
		try {
		    ArrayList<String> lines = new ArrayList<>(Files.readAllLines(Paths.get("memberList.txt")));
		    for (String l: lines)
			{
		    	
		    	int count =0;
		    	
		    	String[] output = l.split(" ");
		    	int age = Integer.parseInt(output[1]);
		    	contactList[count] = new Person();
				contactList[count].setDetails(output[0], age, output[2]);
				people.add(contactList[count]);
				count++;
			}
		}
		catch (IOException e) {
		    // Handle a potential exception
		}
		
	}

}
