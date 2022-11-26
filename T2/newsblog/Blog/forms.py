from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('email','name')


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('email','name')