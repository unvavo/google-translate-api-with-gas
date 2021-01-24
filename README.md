# google-translate-api-with-gas

## How to use

1. Create GAS Project from [here](https://script.google.com/).

2. Set the `Project Name` and `File Name`, and write the source in the file.

3. Press `Deploy` button and deploy as a Web APP.

4. Like below, access by adding query parameters to the displayed Web Application URL.
    ```
    https://script.google.com/macros/s/AKfycbyW6uzzHZZwEDAG5YQ1GqVU-cpd0CoembR5c9IEm07MLs03x7MqVOH-Hg/exec?text=Hello, World&source=en&target=ja
    ```
    You will get the following response.
    ```
    {"code":200,"text":"こんにちは世界"}
    ```


## Trouble shooting
  If it doesn't work (for example, it says page not found), the URL may have been automatically rewritten due to the account logged in to GAS.

  ```
  https://script.google.com/macros/s/AKfycbyW6uzzHZZwEDAG5YQ1GqVU-cpd0CoembR5c9IEm07MLs03x7MqVOH-Hg/exec
  ```
  ↓
  ```
  https://script.google.com/macros/u/1/s/AKfycbyW6uzzHZZwEDAG5YQ1GqVU-cpd0CoembR5c9IEm07MLs03x7MqVOH-Hg/exec
  ```

  To avoid that problem, try in secret mode or another browser.
