import 'package:flutter/material.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({Key? key}) : super(key: key);

  @override
  _SettingsPageState createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  bool _notificationsEnabled = true;
  bool _darkModeEnabled = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Settings Page'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Account Settings',
              style: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16.0),
            const Text(
              'Change Password',
              style: TextStyle(fontSize: 20.0),
            ),
            const SizedBox(height: 8.0),
            const Text(
              'Change Email Address',
              style: TextStyle(fontSize: 20.0),
            ),
            const SizedBox(height: 16.0),
            const Text(
              'App Settings',
              style: TextStyle(fontSize: 24.0, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 16.0),
            Row(
              children: [
                const Text(
                  'Notifications',
                  style: TextStyle(fontSize: 20.0),
                ),
                const SizedBox(width: 8.0),
                Switch(
                  value: _notificationsEnabled,
                  onChanged: (value) {
                    setState(() {
                      _notificationsEnabled = value;
                    });
                  },
                ),
              ],
            ),
            const SizedBox(height: 8.0),
            Row(
              children: [
                const Text(
                  'Dark Mode',
                  style: TextStyle(fontSize: 20.0),
                ),
                const SizedBox(width: 8.0),
                Switch(
                  value: _darkModeEnabled,
                  onChanged: (value) {
                    setState(() {
                      _darkModeEnabled = value;
                    });
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
