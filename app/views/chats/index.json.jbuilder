json.array!(@chats) do |chat|
  json.extract! chat, :id, :name, :people
  json.url chat_url(chat, format: :json)
end
