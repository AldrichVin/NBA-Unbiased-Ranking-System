from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

BASE_URL = "https://nba-ranking-ds-01.web.app"
NUM_TABS = 20

def main():
    chrome_options = Options()
    chrome_options.add_argument("--start-maximized")
    chrome_options.add_experimental_option("detach", True)

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

    # Open homepage in first tab
    driver.get(BASE_URL)
    print("[Tab 1] Opened homepage")

    # Open remaining tabs
    for i in range(1, NUM_TABS):
        driver.execute_script(f"window.open('{BASE_URL}', '_blank');")
        print(f"[Tab {i+1}] Opened homepage")

    tabs = driver.window_handles

    for i, tab in enumerate(tabs, start=1):
        driver.switch_to.window(tab)
        try:
            # Wait for and click Rankings
            rankings_link = WebDriverWait(driver, 20).until(
                EC.element_to_be_clickable((By.LINK_TEXT, "Rankings"))
            )
            rankings_link.click()
            print(f"[Tab {i}] Clicked Rankings link")

            # Wait for search bar to appear
            search_box = WebDriverWait(driver, 20).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "input[placeholder='Search player...']"))
            )
            search_box.send_keys("LeBron")
            search_box.send_keys(Keys.ENTER)
            print(f"[Tab {i}] [OK] Searched for LeBron")

        except Exception as e:
            print(f"[Tab {i}] [X] Error navigating or searching: {e}")

    print(f"\nAll {NUM_TABS} tabs navigated and searched successfully.")
    print("Browser will remain open for showcase.")

if __name__ == "__main__":
    main()
