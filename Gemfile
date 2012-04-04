source :rubygems

gem 'rake'
gem 'sinatra'
gem 'thin'
gem 'mongoid'
gem 'bson_ext'
gem 'haml'
gem 'bcrypt-ruby',  :require => 'bcrypt'
gem 'json_pure',:require => 'json/pure'
gem 'data_mapper'
gem 'dm-core'
gem 'dm-sqlite-adapter'
gem 'dm-timestamps'
gem 'dm-validations'
gem 'dm-aggregates'
gem 'dm-migrations'


group :development do
  gem 'sinatra-reloader'
  gem 'shotgun'
end

group :test do
  gem 'rspec'
  gem 'faker'
  gem 'machinist'
  gem 'machinist_mongo',
    :require  => 'machinist/mongoid',
    :git      => 'git://github.com/nmerouze/machinist_mongo.git',
    :branch   => 'machinist2'
  gem 'capybara'
  gem 'rspec'
  gem 'rack-test'
  gem 'capybara-webkit'
end
