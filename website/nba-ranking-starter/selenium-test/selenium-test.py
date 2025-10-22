from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
import time

# 🔗 Your website URLs
BASE_URL = "https://nba-ranking-ds-01.web.app"
RANKING_URL = f"{BASE_URL}/rankings"

# 🔢 Number of tabs to open
NUM_TABS = 20  # adjust 20–30

def main():
    chrome_options = Options()
    chrome_options.add_argument("--start-maximized")
    chrome_options.add_experimental_option("detach", True)  # keeps browser open after script ends

    # Launch one browser instance
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    driver.get(BASE_URL)
    print(f"[Tab 1] Opened homepage")

    # Wait a second between each tab open (looks smoother for presentation)
    for i in range(1, NUM_TABS):
        driver.execute_script(f"window.open('{RANKING_URL}', '_blank');")
        print(f"[Tab {i+1}] Opened {RANKING_URL}")
        time.sleep(0.5)

    print(f"\n{NUM_TABS} tabs opened successfully.")

    # Keeps the script running so the browser doesn’t auto-close
    while True:
        time.sleep(60)

if __name__ == "__main__":
    main()
