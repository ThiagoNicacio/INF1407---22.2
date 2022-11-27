from django.conf.urls import include
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *
from django.contrib.auth.views import LoginView, LogoutView
from django.urls.base import reverse_lazy
from django.shortcuts import redirect

urlpatternsCore = [
    path('create-user/', create_user),
    path('auth/', CustomAuthToken.as_view()),
    path('create-news/', create_news),
    path('list-news/', list_news),
    path('list-news-of-user/', list_news_of_user),
    path('update-news/', update_news),
    path('delete-news/', delete_news), 
    path('get-user/', get_user), 
    path('update-user/', update_user)
]

urlpatternsSite = [
    path('', index, name='index'),
    path('register/', register_new_account, name='register'),
    path('login/', LoginView.as_view(template_name='Blog/login.html', next_page='home'), name='login'),
    path('logout/', LogoutView.as_view(next_page=reverse_lazy('index')), name='logout'),
    path('home/', ListAllNews.as_view(), name='home'), 
    path('myNews/', ListMyNews.as_view(), name='myNews'),
    path('updateNews/<int:pk>', NewsUpdate.as_view(), name='updateNews'),
]