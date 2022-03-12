from posixpath import split
from django.contrib.auth.hashers import make_password
import json
from django.http import HttpResponseBadRequest, HttpResponseForbidden
from django.http.response import JsonResponse
from rest_framework.views import APIView
# from api.models import Questions,Options,Results,Subject,Test,CodingTest,Para,Paraopt,Paraqs,MyUser,Feedback,ConstData,QuestionJson
from rest_framework_simplejwt.tokens import RefreshToken,AccessToken
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt 
from django.contrib.auth.models import User
import datetime
from rest_framework.parsers import JSONParser
import random
# from .serializers import CodingTestSerializer, MyUserSerializer, OptSerializer, SubjectSerializer,QuestionSerializer, TestSerializer ,ResultSerializer,OptionSerializer,AllUserSerializer
import math
from django.db.models import Q
from dateutil import tz
import cloudinary
import cloudinary.search
from django.contrib.auth.models import User,auth
from django.core.mail import send_mail,EmailMultiAlternatives
from django.template.loader import get_template
from django.conf import settings
import uuid
CFG = {'DB': None}
import pandas as pd

# Create your views here.

class BlackListTokenView(APIView):
    permission_classes=[AllowAny]

    def post(self,request):
        try:
            refresh_token=request.data['refresh_token']
            token=RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

