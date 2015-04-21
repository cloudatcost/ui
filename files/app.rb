require 'cac'
require 'sinatra'
require 'time'

credentials =  { key: ENV['CAC_API_KEY'], login: ENV['CAC_API_LOGIN'], username: ENV['CAC_BASIC_HTTP_USER'], password: ENV['CAC_BASIC_HTTP_PASS']}

set :bind, '0.0.0.0'
set :environment, :production
set :port, 8080
disable :reload
set :show_exceptions, false
set :raise_errors, false

use Rack::Auth::Basic, "Protected Area" do |username, password|
    username == credentials[:username] && password == credentials[:password]
end

get '/' do
  erb :index, :layout => :panel_layout, :locals => 
  {
    credentials: credentials, 
    servers: Cac.new(credentials[:key], credentials[:login]).servers
  }
end

get '/build' do
  erb :build, :locals => 
  {
    credentials: credentials, 
    templates: Cac.new(credentials[:key], credentials[:login]).templates,
    resources: Cac.new(credentials[:key], credentials[:login]).resources
  }
end

get '/cac/tasks' do
  erb :tasks, :locals => 
  {
    credentials: credentials, 
    tasks: Cac.new(credentials[:key], credentials[:login]).tasks
  }
end

get '/cac/servers' do
 Cac.new(credentials[:key], credentials[:login]).servers.to_s
end

post '/cac/build' do
 Cac.new(credentials[:key], credentials[:login]).build(params[:cpu], params[:ram], params[:storage], params[:os]).to_s
end

post '/cac/delete' do
 Cac.new(credentials[:key], credentials[:login]).delete(params[:sid]).to_s
end

post '/cac/powerop' do
 Cac.new(credentials[:key], credentials[:login]).power(params[:action], params[:sid]).to_s
end

post '/cac/rdns' do
 Cac.new(credentials[:key], credentials[:login]).rdns(params[:sid], params[:hostname]).to_s
end

post '/cac/rename' do
 Cac.new(credentials[:key], credentials[:login]).rename(params[:sid], params[:name]).to_s
end

post '/cac/runmode' do
 Cac.new(credentials[:key], credentials[:login]).runmode(params[:sid], params[:mode]).to_s
end

get '/cac/console' do
 redirect Cac.new(credentials[:key], credentials[:login]).console(params[:sid])["console"]
end
