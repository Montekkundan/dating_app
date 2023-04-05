import 'package:flutter/material.dart';
import 'package:flutter_client/presentation/pages/home/home_page.dart';
import 'package:flutter_client/presentation/pages/member/member_list.dart';
import 'package:flutter_client/presentation/pages/settings/settings_page.dart';

class Routes {
  static const String home = '/';
  static const String match = '/match';
  static const String settings = '/settings';

  static final Map<String, WidgetBuilder> _routes = {
    home: (_) => const HomePage(),
    match: (_) => const MemberList(),
    settings: (_) => const SettingsPage(),
  };

  static Route<dynamic> generateRoute(RouteSettings settings) {
    final builder = _routes[settings.name];
    if (builder != null) {
      return MaterialPageRoute(builder: builder);
    } else {
      return MaterialPageRoute(
        builder: (_) => Scaffold(
          body: Center(
            child: Text('No route defined for ${settings.name}'),
          ),
        ),
      );
    }
  }
}
