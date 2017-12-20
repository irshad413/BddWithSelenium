package SeleniumFunctions;

public interface SeleniumDriver {
	void getTextById(String elementId, String text);
	boolean isElementVisible(String elementId);
	void getTextByCss(String css);
	void clickByCss(String css);
	void clickbyId(String elementId);
}
