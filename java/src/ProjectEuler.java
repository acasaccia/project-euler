import Problems.*;

public final class ProjectEuler {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		long startTime = System.currentTimeMillis();
		
		try {
			Class<?> problemClass = Class.forName("Problems.Problem" + args[0]);
			Problem problemInstance = (Problem) problemClass.newInstance();
			problemInstance.solve();
		} catch (
			ClassNotFoundException |
			SecurityException |
			InstantiationException |
			IllegalAccessException e
		) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		long endTime = System.currentTimeMillis();
		System.out.println("Done [Elapsed: " + ((endTime - startTime) / 1000.0) + "\"]");
		
	}

}
