from django.db import models
from urllib import request
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils import timezone
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.conf import settings

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError(_('Users must have an email'))

        user = self.model(
            email=email,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(
            email,
            password=password,
        )

        user.is_admin = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser):
    email = models.EmailField(max_length=255, null=True, blank=False, unique=True)
    name = models.CharField(max_length=255, null=True, blank=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    objects = UserManager()

    # user name que o usuário deve utilizar para realizar o login
    USERNAME_FIELD = 'email'

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    def is_verified(self):
        return self.is_active

    @property
    def is_staff(self):
        return self.is_admin

class News(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=False)
    title = models.CharField(max_length=255, null=False, blank=False)
    message = models.TextField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 