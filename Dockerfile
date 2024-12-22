# Use a base image with Ruby and Jekyll preinstalled
FROM jvconseil/jekyll-docker:latest

# Set the working directory inside the container
WORKDIR /srv/jekyll

# Copy the local theme files into the container
COPY . .

# Install necessary gems
RUN bundle install

# Expose Jekyll's default port
EXPOSE 4000

# Default command to serve the site
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
