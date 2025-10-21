# Use official R image
FROM rocker/r-ver:4.3.2

# Install system libraries needed by R packages
RUN apt-get update -qq && apt-get install -y \
    libcurl4-openssl-dev libssl-dev libxml2-dev libgit2-dev git && \
    apt-get clean

# Install required R packages
RUN R -e "install.packages(c('plumber','dplyr','jsonlite'), repos='https://packagemanager.posit.co/cran/__linux__/jammy/latest')"

# Copy API files into container
WORKDIR /app
COPY . /app

# Expose the Plumber port
EXPOSE 8080

# Start Plumber API
CMD ["R", "-e", "pr <- plumber::plumb('plumber.R'); pr$run(host='0.0.0.0', port=8080)"]
