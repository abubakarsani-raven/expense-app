```toml
name = 'Update'
method = 'PUT'
url = '${{url}}/income/2307fe19-0a79-4e74-8c14-d339ad45d64e'
sortWeight = 2000000
id = '4274d509-2b7d-4c59-bd27-e7375a710aef'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "amount": 126,
  "source": "source yoda"
}'''
```
