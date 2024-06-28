```toml
name = 'Create'
method = 'POST'
url = '${{url}}/income'
sortWeight = 1000000
id = '03685316-1c14-467b-9126-28c392957d82'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "source": "source_lI19",
  "amount": 431
}'''
```
