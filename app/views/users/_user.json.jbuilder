json.extract! user, :id, :login, :password, :salt, :created_at, :updated_at
json.url user_url(user, format: :json)
