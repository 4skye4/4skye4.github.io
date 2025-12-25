# Use a base image with Ruby and Jekyll preinstalled
FROM jvconseil/jekyll-docker:4.0

# Set the working directory inside the container
WORKDIR /srv/jekyll

# Copy Gemfile first to avoid installation each time
COPY Gemfile Gemfile.lock .

# Install necessary gems
RUN bundle install

# Copy sources
COPY . .

# Expose Jekyll's default port
EXPOSE 4000

# Default command to serve the site
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
