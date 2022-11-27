from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import User, News
from django import forms

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('email','name')


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('email','name')

class NewsModel2Form(forms.ModelForm):
  class Meta:
    model = News
    fields = ('title', 'message')