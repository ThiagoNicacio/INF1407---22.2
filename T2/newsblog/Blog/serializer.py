from dataclasses import field
from rest_framework import serializers
from .models import *
from django.core.files.base import ContentFile
from newsblog.settings import *
from rest_framework.response import Response
from rest_framework import viewsets, status

class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        password = validated_data.pop('password')

        validated_data['is_active'] = True

        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}, 
                        'last_login': {'write_only': True}} # Impede que o password e o last_login sejam exibidos no getUser

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'